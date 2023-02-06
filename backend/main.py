import MySQLdb.cursors
from app import app
from flask import jsonify
from flask import flash, request
import config
import pandas
import json


@app.route("/insert", methods=["POST"])
def insert_campaign():
    try:
        _json = request.json
        _date = _json["date"]
        _label = _json["label"]
        _attributed_conversions = _json["attributed_conversions"]
        _attributed_revenue = _json["attributed_revenue"]
        _type = _json["type"]
        _spends = _json["spends"]
        _partition_id = _json["partition_id"]
        _optimisation_target = _json["optimisation_target"]

        if (
            _date
            and _label
            and _attributed_conversions
            and _attributed_revenue
            and _type
            and _spends
            and _partition_id
            and _optimisation_target
            and request.method == "POST"
        ):
            conn = config.getDbConnection()
            cursor = conn.cursor(MySQLdb.cursors.DictCursor)
            sqlQuery = config.insert_query
            bindData = (
                _date,
                _label,
                _attributed_conversions,
                _attributed_revenue,
                _type,
                _spends,
                _partition_id,
                _optimisation_target,
            )
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify("Campaign data added successfully!")
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


@app.route("/fetch/1-vs-1", methods=["POST"])
def fetch_grouped_data():
    try:
        print("entered")
        _json = request.json
        _attribute1 = _json[
            "attribute1"
        ]  # Example it can be label or attributed_conversions or attributed revenue
        _attribute2 = _json[
            "attribute2"
        ]  # Example it can be label or attributed_conversions or attributed revenue
        print(f"--_attribute1 -- {_attribute1}---- _attribute2 ------ {_attribute2}")
        conn = config.getDbConnection()
        print(conn)
        cursor = conn.cursor(MySQLdb.cursors.DictCursor)
        query = f""" SELECT {_attribute1}, sum({_attribute2}) AS total_{_attribute2}
                    FROM campaign_data
                    GROUP BY {_attribute1}
                    HAVING sum({_attribute2}) IS NOT NULL 
                    ORDER BY {_attribute1} ASC;"""
        print(query)
        # cursor.execute('SELECT %s, sum(%s) from campaign_data GROUP by %s ORDER BY %s ASC',(_attribute1,_attribute2,_attribute1,_attribute1))
        cursor.execute(query)
        fetchedData = cursor.fetchall()
        print(type(fetchedData))
        # df = pandas.read_json(fetchedData)
        # jsonstring = json.dumps(fetchedData)
        cursor.close()
        respone = jsonify(fetchedData)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        conn.close()


@app.route("/fetch/monthlyStatements", methods=["POST"])
def fetch_monthly_statements():
    try:
        print("entered")
        _json = request.json
        _attribute1 = _json[
            "attribute1"
        ]  # Example it can be label or attributed_conversions or attributed revenue
        _attribute2 = _json[
            "attribute2"
        ]  # Example it can be label or attributed_conversions or attributed revenue
        _target_attribute = _json[
            "target_attribute"
        ]  # Example it can be label or attributed_conversions or attributed revenue
        print(
            f"--_attribute1 -- {_attribute1}---- _attribute2 ------ {_attribute2} ---- _target_attribute ------ {_target_attribute}"
        )
        conn = config.getDbConnection()
        print(conn)
        cursor = conn.cursor(MySQLdb.cursors.DictCursor)
        query = f""" SELECT {_attribute1}, sum({_attribute2}) AS Monthly_{_attribute2}, MONTHNAME(date) AS Month_Name 
                        FROM campaign_data
                        WHERE optimisation_target='{_target_attribute}'
                        GROUP BY MONTHNAME(date), MONTH(date), {_attribute1} 
                        HAVING sum({_attribute2}) IS NOT NULL 
                        ORDER BY MONTH(date) ASC;"""
        print(query)
        # cursor.execute('SELECT %s, sum(%s) from campaign_data GROUP by %s ORDER BY %s ASC',(_attribute1,_attribute2,_attribute1,_attribute1))
        cursor.execute(query)
        fetchedData = cursor.fetchall()
        print(len(fetchedData))
        cursor.close()
        respone = jsonify(fetchedData)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        conn.close()


@app.route("/fetch/all")
def fetch_all_data():
    try:
        conn = config.getDbConnection()
        print(conn)
        cursor = conn.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(config.select_all_query)
        allCampaignData = cursor.fetchall()
        print(len(allCampaignData))
        cursor.close()
        respone = jsonify(allCampaignData)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        conn.close()


@app.route("/delete/<string:label>", methods=["DELETE"])
def delete_campaign(label):
    try:
        conn = config.getDbConnection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM campaign_data WHERE label =%s", (label,))
        conn.commit()
        respone = jsonify("Campaign data deleted successfully!")
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


@app.errorhandler(404)
def showMessage(error=None):
    message = {
        "status": 404,
        "message": "Record not found: " + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone


if __name__ == "__main__":
    app.run(port=4000)
