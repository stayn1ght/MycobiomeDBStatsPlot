library("RMySQL")
library("tidyverse")

# Connect to the database
conn <- dbConnect(MySQL(), dbname="gmdb1_1", username="root", password="root123456", host="localhost")
species_abundance <- dbGetQuery(conn, "SELECT * FROM species_abundance")

# 使用 species abundance 中的 ncbi taxon id 和 relative abundance 作 boxplot
species_abundance %>%
    filter(!is.na(relative_abundance)) %>%
    select(ncbi_taxon_id, relative_abundance) %>%
    # 按照 ncbi taxon id 分组
    group_by(ncbi_taxon_id) %>%
    # 计算每个分组的 relative abundance 的均值
    summarise(mean_relative_abundance = mean(relative_abundance))
  ggplot(aes(x = ncbi_taxon_id, y = relative_abundance)) +
  geom_boxplot() +
  theme(axis.text.x = element_text(angle = 90, hjust = 1)) +
  labs(x = "NCBI Taxon ID", y = "Relative abundance")
