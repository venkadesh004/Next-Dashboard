import React from "react";
import {Box, Grid, Paper} from "@mui/material";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionPerDay from "@/components/Dashboard/TransactionPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";

const Dashboard = () => {
    return (
        <Box>
            <Grid container gap={4} marginTop={2}>  
                {/* Data Ribbon - showing numerical stats */}
                <DataRibbon />
                {/* TransactionsPerDay - graph - numerical cards */}
                <TransactionPerDay />
            </Grid>
            {/* Transaction Doughnut charts button row - a few doughnut charts to break down some data into fractions */}
            <TransactionBottomRow />
        </Box>
    );
}

export default Dashboard;