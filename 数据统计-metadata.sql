-- 1. 一列不为NULL的数据记录数量：
SELECT COUNT(*) AS count
FROM sample_to_run_info
WHERE sex IS NOT NULL OR host_age IS NOT NULL OR BMI IS NOT NULL;


-- 两列不为NULL的数据记录数量
SELECT COUNT(*) AS count
FROM sample_to_run_info
WHERE (sex IS NOT NULL AND host_age IS NOT NULL)
   OR (sex IS NOT NULL AND BMI IS NOT NULL)
   OR (host_age IS NOT NULL AND BMI IS NOT NULL);

-- 三列都不为空的数据记录数量
SELECT COUNT(*) AS count
FROM sample_to_run_info
WHERE sex IS NOT NULL AND host_age IS NOT NULL AND BMI IS NOT NULL;

-- 三列都空的数据记录数量
SELECT COUNT(*) AS count
FROM sample_to_run_info
WHERE sex IS NULL AND host_age IS NULL AND BMI IS NULL;