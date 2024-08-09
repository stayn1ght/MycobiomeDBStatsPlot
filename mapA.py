from pyecharts import options as opts
from pyecharts.charts import Map
from pyecharts.faker import Faker
import pandas as pd
from pyecharts.render import make_snapshot
import os

# fake基础数据
value = [95.1, 23.2, 43.3, 66.4, 88.5]
attr = ["China", "Canada", "Brazil", "Russia", "United States"]

# 读取数据
sample_to_run_info = pd.read_csv('F:/07-data/gmdb_data/sample_to_run_info.csv')

# 处理数据
# 每一行是run_info，每一行的country是国家。统计每个国家对应的run_info的数量
sample_to_run_info.loc[sample_to_run_info['country'] == "USA",'country'] = 'United States'
country_count = sample_to_run_info['country'].value_counts()
a = country_count.index.tolist()
b = country_count.values

dataa = []
for index in range(len(attr)):
    city_ionfo=[attr[index],value[index]]
    dataa.append(city_ionfo)

data = []
for index in range(len(country_count)):
    city_ionfo=[country_count.index.tolist()[index],country_count.values.tolist()[index]]
    data.append(city_ionfo)

c = (
    Map(init_opts=opts.InitOpts(renderer="svg"))
    .add("",data, "world")
    .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(title=""),
        visualmap_opts=opts.VisualMapOpts(
            max_=1400
        ),
        
    )
    .render("01_output/render.html")
)


# >>>>> 画 pie 图 >>>>>
# 分别统计 美洲 欧洲 亚洲 非洲 的 genus 组成
taxon_abundance = pd.read_csv('F:/07-data/gmdb_data/curated_taxon_abundance.csv')
# 只保留 taxon_level 为 genus 的数据
taxon_abundance = (taxon_abundance[taxon_abundance['taxon_level'] == 'genus']
                   .merge(sample_to_run_info[['run_id','country']],
                          left_on='accession_id',right_on='run_id'))
# 每个 country 对应到 洲
country = taxon_abundance['country'].unique().tolist()
continent = ['Asia','Europe', 'North America']

# country
# ['Japan', 'Italy', 'USA', 'France', 'Denmark', nan, 'Ireland', 'China', 'Malawi', 'United Kingdom', 'India', 'Germany', 'Thailand', 'Australia', 'Belgium', 'Canada', 'Central African Republic', 'Madagascar', 'Malaysia']

country_continent = {'Japan':'Asia', 'Italy':'Europe', 'USA':'North America', 'France':'Europe', 'Denmark':'Europe', 'Ireland':'Europe', 'China':'Asia', 'Malawi':'Africa', 'United Kingdom':'Europe', 'India':'Asia', 'Germany':'Europe', 'Thailand':'Asia', 'Australia':'Australia', 'Belgium':'Europe', 'Canada':'North America', 'Central African Republic':'Africa', 'Madagascar':'Africa', 'Malaysia':'Asia'}

taxon_abundance['continent'] = taxon_abundance['country'].map(country_continent)

# 筛选相对丰度
taxon_abundance = taxon_abundance[taxon_abundance['relative_abundance'] > 0.01]

# 每个洲，每个genus的 relative_abundance
continent_genus = taxon_abundance.groupby(['continent','taxon_id'])['relative_abundance'].mean().reset_index()

# taxon_abundance.sort_values(by=['continent','taxon_id'],ascending=True)
# continent_genus.sort_values(by=['continent','taxon_id'],ascending=True)

# 挑出在 continent 中的 genus
continent_genus = continent_genus[continent_genus['continent'].isin(continent)]

# 每个洲有多少个genus
# continent_genus.groupby('continent')['taxon_id'].count().reset_index()
# 每个id在多少样本中出现
# taxon_abundance['taxon_id'].value_counts()
# 去掉只在 1 个 run_id 出现的genus
remove_list = taxon_abundance['taxon_id'].value_counts()[taxon_abundance['taxon_id'].value_counts() < 100].index.tolist()
continent_genus = continent_genus[~continent_genus['taxon_id'].isin(remove_list)]

# 挑出 流行度 排第 2 到 21 的genus
genus_list = (pd.DataFrame({'taxon_id':taxon_abundance['taxon_id'].value_counts().head(21).index,
               'count':taxon_abundance['taxon_id'].value_counts().head(21).values})
               .iloc[1:,0]
                .tolist())

# 统计每个洲的genus的 relative_abundance，不在genus_list里的归为Others
continent_genus.loc[~continent_genus['taxon_id'].isin(genus_list),'taxon_id'] = 0

data = continent_genus.groupby(['continent','taxon_id'])['relative_abundance'].sum().reset_index()

data.iloc[:21,:]
data.iloc[21:42,:]
data.iloc[42:,:].sum()

# data 变为 宽格式，行为genus，列为洲
import numpy as np
data1 = data.pivot(index='taxon_id',columns='continent',values='relative_abundance').reset_index()

# data1 是一个 dataframe，行是genus，列是洲
# 需要改成
# [ , , , ]
# [ , , , ]
# 这种格式
data2 = []
for i in range(data1.shape[0]):
# data1的第一列是 int 类型
    data2.append([int(data1.iloc[i,0]),data1.iloc[i,1],data1.iloc[i,2],data1.iloc[i,3]])
