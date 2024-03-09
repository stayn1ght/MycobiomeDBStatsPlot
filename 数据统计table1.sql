-- 从gmdb1_1中获取论文table1 对 health status 的统计
select project_id, run_id, disease  from sample_to_run_info limit 10;

select uid, accession_id, QCStatus from samples_loaded limit 10;

select sample_uid, ncbi_taxon_id from curated_taxon_abundance limit 10;


-- 上面两个表拼起来 disease - run - QCStatus
SELECT t1.project_id, t1.run_id, t1.disease, t2.QCStatus, t3.ncbi_taxon_id
FROM sample_to_run_info AS t1
INNER JOIN samples_loaded AS t2 ON t1.run_id = t2.accession_id
INNER JOIN curated_taxon_abundance AS t3 ON t2.uid = t3.sample_uid
limit 10;


SELECT 
    t1.disease, t4.term,
    COUNT(DISTINCT t1.run_id) AS num_runs, 
    COUNT(DISTINCT CASE WHEN t2.QCStatus = 0 THEN t1.run_id END)
    + COUNT(DISTINCT CASE WHEN t2.QCStatus = 1 THEN t1.run_id END) AS processed_runs ,
    COUNT(DISTINCT CASE WHEN t2.QCStatus = 1 THEN t1.run_id END) AS valid_runs,
    COUNT(DISTINCT CASE WHEN t2.QCStatus = 0 THEN t1.run_id END) AS failed_runs,    
    COUNT(DISTINCT t3.ncbi_taxon_id) AS Associated_genus
FROM 
    sample_to_run_info AS t1 
    JOIN samples_loaded AS t2 ON t1.run_id = t2.accession_id 
    JOIN curated_taxon_abundance AS t3 ON t2.uid = t3.sample_uid
    JOIN mesh_data AS t4 ON t1.disease = t4.uid
GROUP BY 
    t1.disease, t4.term;


-- 然后统计 disease - Nr. run - Nr. processed run ...


-- 这数据好像有问题，processed runs 似乎比 num runs 更多
+------------+------------------------------------+----------+----------------+------------+-------------+------------------+
| disease    | term                               | num_runs | processed_runs | valid_runs | failed_runs | Associated_genus |
+------------+------------------------------------+----------+----------------+------------+-------------+------------------+
| D000086382 | COVID-19                           |      106 |            186 |        186 |           0 |              186 |
| D000544    | Alzheimer Disease                  |       88 |            143 |        143 |           0 |              143 |
| D003876    | Dermatitis, Atopic                 |       17 |            205 |        130 |          75 |              149 |
| D003922    | Diabetes Mellitus, Type 1          |      103 |             51 |         24 |          27 |               34 |
| D003924    | Diabetes Mellitus, Type 2          |       22 |              0 |          0 |           0 |                0 |
| D003930    | Diabetic Retinopathy               |       24 |              0 |          0 |           0 |                0 |
| D006262    | Health                             |      444 |            652 |        424 |         228 |              495 |
| D043183    | Irritable Bowel Syndrome           |       80 |            260 |        228 |          32 |              232 |
| D053118    | Influenza A Virus, H1N1 Subtype    |       32 |            138 |        138 |           0 |              138 |
| D065626    | Non-alcoholic Fatty Liver Disease  |       41 |             37 |          8 |          29 |               31 |
+------------+------------------------------------+----------+----------------+------------+-------------+------------------+


SELECT 
    *
FROM 
    sample_to_run_info AS t1 
    LEFT JOIN samples_loaded AS t2 ON t1.run_id = t2.accession_id 
    LEFT JOIN curated_taxon_abundance AS t3 ON t2.uid = t3.sample_uid 
    LEFT JOIN mesh_data AS t4 ON t1.disease = t4.uid
 limit 10;
