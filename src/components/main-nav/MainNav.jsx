import styles from "./MainNav.module.css";
import { sideBarData } from "../../data/side-bar-data";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const StyledNavLink = styled(Link)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* font-weight: 800; */
  /* background-color: red; */

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 5px;
    /* font-weight: 800; */
    color: var(--color-grey-600);
    font-size: 0.3;
    /* font-weight: 500; */
    text-decoration: none;
    transition: all 0.3s;
    /* padding: 1.2rem 2.4rem; */
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 20px;
    height: 20px;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const UpSpan = styled.span`
  /* background-color: blue; */
  svg {
    /* margin-right: 0; */
    width: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const CategorySpan = styled.span`
  /* background-color: red; */
  display: flex;
  align-items: center;
  gap: 0.5rem;

  /* justify-content: center; */
  font-weight: 200;
`;
const ChildrenContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`;
const ChildStyledNavLink = styled(NavLink)`
  padding: 4px;
  display: flex;
  margin-left: 17px;
  /* font-weight: 800; */
  /* background-color: red; */

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 800;
    color: var(--color-grey-600);
    font-size: 0.3;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s;
    /* padding: 1.2rem 2.4rem; */
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 20px;
    height: 20px;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export const MainNav = () => {
  const [isTapped, setIsTapped] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);

  const isActiveCategory = (testCategory, actualCategory) => {
    return testCategory === actualCategory && isTapped;
  };

  const categoryClickHandler = (test) => {
    setActiveCategory(test);
    console.log("activeCategory", activeCategory);
    console.log("OKAY!");
    setIsTapped(!isTapped);
  };
  return (
    <nav className={styles["nav-container"]}>
      {sideBarData.map((item) => (
        <ul className={styles["nav-list"]} key={item.id}>
          <li>
            <StyledNavLink
              //   className={styles["styled-nav-link"]}
              to={item?.linkName}
              onClick={() => categoryClickHandler(item.category)}
            >
              <CategorySpan>
                <span className={styles["sidebar-icon"]}>{item.icon} </span>

                <span>{item.category}</span>
              </CategorySpan>
              <UpSpan>
                {!isActiveCategory(item.category, activeCategory)
                  ? item?.down
                  : item?.up}
              </UpSpan>
            </StyledNavLink>

            {isActiveCategory(item.category, activeCategory) && (
              <ChildrenContainer>
                {item?.children?.map((item) => (
                  <ChildStyledNavLink to={item.linkName} key={item.linkName}>
                    {item.label}
                  </ChildStyledNavLink>
                ))}
              </ChildrenContainer>
            )}
          </li>
        </ul>
      ))}
    </nav>
  );
};
