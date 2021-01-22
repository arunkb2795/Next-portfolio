import Link from "next/link";
import Layout from "../components/Layout";
const Index = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link href="/about">
        <a>Go to about</a>
      </Link>
      <div>Next</div>
    </Layout>
  );
};

export default Index;
