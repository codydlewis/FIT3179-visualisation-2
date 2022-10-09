# `map-regions`

## Files

### `0-Original-Shapefile.zip`

- The original shapefile files downloaded from the Australian Bureau of Statistics on their [Digital Boundary Files](https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/access-and-downloads/digital-boundary-files) page. I used the LGA 2022 download.

### `1-OnlyVictoria.json`

- Used <https://mapshaper.org/>.
- Converted shapefile into TopoJSON.
- Removed all regions outside of Victoria.

### `2-Simplified.json`

- Used <https://mapshaper.org/>.
- Simplified using Visvalingam / weighted area to 1%.
  
### `3-ManualSeparationUnincorp.json`

- Used text editor.
- Split apart the `Unincorporated Victoria` multipolygon in distinct areas.

### `4-Clean.json`

- Used <https://mapshaper.org/>.
  - Used the `mapshaper -clean` command to remove overlapping areas and unused arcs.
  - Rename regions which were given the 'number' lga names from the process of separating unincorporated regions.
    - Yarra Ranges
    - French Island - technically not a region but has been given special consideration for this task.

- Used text editor.
  - Renamed some LGA regions which had "(Vic.)" suffix to differentiate between other states.
  - Remove the "Greater" prefix which some LGAs use.
