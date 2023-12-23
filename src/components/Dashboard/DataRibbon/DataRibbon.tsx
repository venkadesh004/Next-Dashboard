import React from "react";
import { Grid } from "@mui/material";
import DataCard from "../DataCard";

const DataRibbon = () => {
    return (
        <Grid container gap={2} className="grid text-center grid-cols-1 lg:grid-cols-4">
            <Grid>
                <DataCard
                    title={"Total Sales"}
                    value={"462"}
                    description={
                        "The total sales of all Datasoft products in the current financial year"
                    }
                />
            </Grid>
            <Grid>
                <DataCard
                    title={"Total Value"}
                    value={"$25,732.53"}
                    description={
                        "The total sales of the current financial year"
                    }
                />
            </Grid>
            <Grid>
                <DataCard
                    title={"Avg. Order Value"}
                    value={"$199.38"}
                    description={
                        "The average order value for all sales this current financial year"
                    }
                />
            </Grid>
            <Grid>
                <DataCard
                    title={"Conversion rate"}
                    value={"0.61%"}
                    description={
                        "How many pitches become sales"
                    }
                />
            </Grid>
        </Grid>
    );
}

export default DataRibbon;