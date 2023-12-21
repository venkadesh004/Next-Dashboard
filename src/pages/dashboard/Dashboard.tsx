import React from "react";
import {Box, Grid, Paper} from "@mui/material";

const dataCard = "p-[20px]";
const topCardsContainer = "grid grid-cols-1 md:grid-cols-3";

const Dashboard = () => {
    return (
        <Box>
            <Grid container gap={2} className={topCardsContainer}>
                <Grid>
                    <Paper className={dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={dataCard}>xs=4</Paper>
                </Grid>
            </Grid>
            <Grid xs={12} marginY={2}>
                <Paper className={dataCard}>xs=8</Paper>
            </Grid>
        </Box>
    );
}

export default Dashboard;