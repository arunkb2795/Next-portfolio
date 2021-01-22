import Layout from "../components/Layout";
import React from "react";
import Link from "next/link";

const PostLink = ({ title, slug }) => {
  return (
    <li>
      <Link as={slug} href={`/post?title=${title}`}>
        {title}
      </Link>
    </li>
  );
};
export default function blog() {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="react-post" title="React Post" />
        <PostLink slug="angular-post" title="Angular Post" />
        <PostLink slug="vue-post" title="Vue Post" />
      </ul>
    </Layout>
  );
}
