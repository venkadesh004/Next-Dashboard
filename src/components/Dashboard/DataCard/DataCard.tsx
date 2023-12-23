import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import scss from "./DataCard.module.scss";

export type DataCardProps = {
    title: string,
    value: string,
    description: string
};

const DataCard = (props: DataCardProps) => {
    const {title, value, description} = props;

    return (
        <Paper sx={{ padding: '1rem', height: '100%' }} className={`relative top-4 h-full w-[calc(100% - 0.1rem)] py-4 px-2 ${scss.dataCard}`}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} className={`${scss.header} flex justify-center`}>
                <Typography fontSize={"h6"} color="lightslategrey">
                    {title}
                </Typography>
                <Tooltip
                    title={
                        <Typography fontSize={16}>
                            {`${description} which is ${value}`}
                        </Typography>
                    }
                >
                    <IconButton>
                        <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <Typography fontSize={"h4"}>{value}</Typography>
        </Paper>
    );
}

export default DataCard;