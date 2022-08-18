import React from "react";
import Videochat from "../component/Videochat";
import dbref, { username, connectedref } from "../backend/room";
import { useEffect } from "react";

export const Meetingroom = () => {
  const user = auth.currentUser.displayName;
  useEffect(() => {
    const participantsref = dbref.child("participants");
    connectedref.on("value", (snap) => {
      if (snap.val()) {
        const defaultPreference = { audio: true, video: false, screen: false };
        const userRef = participantsref.push({
          user,
          preference: defaultPreference,
        });
        userRef.onDisconnect().remove();
      }
    });
  }, []);

  return (
    <div>
      {/* <Videochat /> */}
      {auth.currentUser.displayName}
    </div>
  );
};
