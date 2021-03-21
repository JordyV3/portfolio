import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found" footer={false}>
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        This page does not exists. Please return to{" "}
        <Link href="/">
          <div className="container py-2">
          <a className="btn btn-outline-primary">Home</a>
          </div>
          
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
