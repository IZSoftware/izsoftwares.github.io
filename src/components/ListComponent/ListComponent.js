import React, { useState } from "react";
import { Card, Box, Typography, List, ListItem, ListItemText, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ListComponent = ({ title, items, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedItems = isExpanded ? items : items.slice(0, 4);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                padding: 3,
                backgroundColor: "#fffdf5",
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                margin: 0,
            }}
        >
            {/* Image */}
            <Box sx={{ textAlign: "center", marginBottom: 2, marginTop: 1 }}>
                <img
                    src={image} 
                    alt={`${title} icon`}
                    style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#fff",
                        padding: "8px",
                    }}
                />
            </Box>

            {/* Title */}
            <Typography
                variant="h6"
                component="h2"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 2,
                    color: "#333",
                    minHeight: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {title}
            </Typography>

            {/* List Items */}
            <Box sx={{ flexGrow: 1 }}> 
                <List sx={{ paddingLeft: 2, paddingRight: 1 }}>
                    {displayedItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: "flex", alignItems: "flex-start", mb: 0.5 }}>
                            {/* Square bullet point */}
                            <Box
                                component="span"
                                sx={{
                                    width: 8,
                                    height: 8,
                                    backgroundColor: "#005eb8",
                                    marginRight: 1.5,
                                    marginTop: 1,
                                    flexShrink: 0
                                }}
                            />
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.3 }}>
                                        {item}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Floating Action Button */}
            <Fab
                size="small"
                onClick={handleToggle}
                sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    backgroundColor: "#005eb8",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#1F51FF" },
                }}
            >
                {isExpanded ? <RemoveIcon /> : <AddIcon />}
            </Fab>
        </Card>
    );
};

export default ListComponent;