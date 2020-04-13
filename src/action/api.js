import axios from 'axios'

const CountryStatConfiguration = {

    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key": "78f0398aa4msh86be5ac1359b0f1p1838a7jsnad282c6e4e48"
    }
}

const TotalStatConfiguration = {

    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":"coronavirus-monitor-v2.p.rapidapi.com",
        "x-rapidapi-key": "78f0398aa4msh86be5ac1359b0f1p1838a7jsnad282c6e4e48"
    }
}


export default {

    TotalStats(url = "https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/worldstat.php", config = TotalStatConfiguration) {
        return {
            get: () => axios.get(url, config)
        }
    },
   CountryStats(url = "https://covid-193.p.rapidapi.com/statistics", config = CountryStatConfiguration) {
        return {
            get: () => axios.get(url, config),
            fetch: () => axios.get("https://g2.antv.vision/en/examples/data/world.geo.json") 
        }

    }
}