import React from "react";
import { useNavigate } from "react-router-dom";
import { DirectoryProps } from "../directory/directory.component";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: DirectoryProps;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const navigate = useNavigate();
  const { id, imageUrl, title, route } = category;

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
