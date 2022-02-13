/* eslint-disable @next/next/no-typos */
import { Grid, Paper } from "@material-ui/core";
import styles from "../../styles/Home.module.css";

export const getStaticProps = async () => {
  let data;
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    data = await res.json();
  } catch (err) {
    console.log("Response failed", err);
  }

  return {
    props: { data },
  };
};

const Home = ({ data }) => {
  return (
    <>
      <Paper className={styles.warpper}>
        <Grid>This is Home Page</Grid>
        {data && data.map((data, index) => <h1 key={index}>{data.title}</h1>)}
      </Paper>
    </>
  );
};

export default Home;
