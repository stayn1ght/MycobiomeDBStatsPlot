select * from species_abundance

order by relative_abundance desc
limit 10;





select * from curated_taxon_abundance

order by relative_abundance desc
limit 10;

SELECT ncbi_taxon_id, AVG(relative_abundance) AS average_abundance
FROM curated_taxon_abundance
GROUP BY ncbi_taxon_id
order by average_abundance desc
limit 10;
