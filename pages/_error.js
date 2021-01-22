import Layout from "../components/Layout";
import React from "react";

export default function _error({ statusCode }) {
  return (
    <Layout title="Error!">
      {statusCode ? (
        <p>Couldn't get the page. Status code {statusCode}</p>
      ) : (
        <p>Couldn't get that page,sorry!</p>
      )}
    </Layout>
  );
}
