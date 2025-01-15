import React from "react";
import { Card, CardContent, Typography, CardMedia, Stack } from "@mui/material";

const ItineraryCard = ({ itinerary }) => {
  const { title, duration, price, rating, hashtags, profile_pic } = itinerary;

  return (
    <Card sx={{ maxWidth: 345, margin: "16px" }}>
      {profile_pic && (
        <CardMedia
          component="img"
          height="140"
          image={profile_pic}
          alt={title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title || "No Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration: {duration || "Not specified"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price !== undefined ? price : "Not specified"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating ? rating.toString() : "Not specified"}
        </Typography>
        <Stack direction="column" spacing={1} mt={2}>
          {Array.isArray(hashtags) && hashtags.length > 0 ? (
            hashtags.map((tag, index) => (
              <Typography key={index} variant="body2" color="primary">
                #{tag.replace(/^#/, "")}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No hashtags
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ItineraryCard;
