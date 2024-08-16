import Header from "@/components/modules/header";
import Sidebar from "@/components/modules/sidebar";
import { Button } from "@/components/ui/button";
import Content from "@/components/ui/content";
import ContentLayout from "@/components/ui/content-layout";
import ContentTitle from "@/components/ui/content-title";
import PageLayout from "@/components/ui/page-layout";

const IndexPage = () => {
  return (
    <PageLayout>
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <ContentLayout>
          <ContentTitle title="Products" />
          <Content>
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <Button className="mt-4">Add Product</Button>
          </Content>
        </ContentLayout>
      </div>
    </PageLayout>
  );
};

export default IndexPage;
