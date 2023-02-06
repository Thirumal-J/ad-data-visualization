DELETE FROM `ad_campaign`.`campaign_data`
WHERE label="aff    ";
SELECT `campaign_data`.`date`,
    `campaign_data`.`label`,
    `campaign_data`.`attributed_conversions`,
    `campaign_data`.`attributed_revenue`,
    `campaign_data`.`type`,
    `campaign_data`.`spends`,
    `campaign_data`.`partition_id`,
    `campaign_data`.`optimisation_target`
FROM `ad_campaign`.`campaign_data`;

DELETE FROM campaign_data WHERE date='2023-01-01'; 
SELECT * FROM campaign_data WHERE date='2023-01-01'; 


SELECT label, sum(spends), sum(attributed_conversions), sum(attributed_revenue) from campaign_data GROUP by label ORDER BY label ASC;


SELECT label,count(optimisation_target) from campaign_data where optimisation_target='conversions' GROUP BY optimisation_target;

SELECT label, sum(spends) as Total_Spends, sum(attributed_revenue) as Attributed_Revenue, MONTHNAME(date) Month_Name FROM campaign_data WHERE optimisation_target='conversions' GROUP BY MONTHNAME(date), label ORDER BY MONTHNAME(date) DESC;

SELECT label, sum(spends) as Total_Spends, sum(attributed_revenue) as Attributed_Revenue, MONTHNAME(date) Month_Name FROM campaign_data 
WHERE optimisation_target='conversions'
GROUP BY MONTHNAME(date), MONTH(date), label HAVING sum(spends) IS NOT NULL ORDER BY MONTH(date) ASC;

SELECT sum(spends) as Total_Spends, MONTHNAME(date) Month_Name FROM campaign_data WHERE optimisation_target='revenue' GROUP BY MONTHNAME(date);


SELECT sum(spends) as Total_Spends, sum(attributed_revenue) as Attributed_Revenue, MONTHNAME(date) Month_Name FROM campaign_data WHERE optimisation_target='revenue' GROUP BY MONTHNAME(date);


SELECT sum(spends), date FROM campaign_data GROUP BY date;

REPAIR TABLE campaign_data;



CREATE DATABASE `ad_campaign` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
