import mysql.connector

def getDbConnection():
 return mysql.connector.connect(user='root', 
                                host='localhost', 
                                port='3306', 
                                password="password", 
                                database='ad_campaign')

select_all_query = "SELECT * FROM campaign_data"

insert_query = "INSERT INTO campaign_data(date, label, attributed_conversions, attributed_revenue, type, spends, partition_id, optimisation_target) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)"

totalIncExp_vs_label_query = "SELECT label, sum(spends), sum(attributed_conversions), sum(attributed_revenue) from campaign_data GROUP by label ORDER BY label ASC;"


