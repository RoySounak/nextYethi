/* eslint-disable @next/next/no-typos */
import { Grid, Paper } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

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
      <Head>
        <title>Tenjin | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Paper className={styles.warpper}>
        <Grid>This is Home Page</Grid>
        {data && data.map((data, index) => <h1 key={index}>{data.title}</h1>)}
      </Paper>
    </>
  );
};

export default Home;
