import { EmptyState, Layout, Page} from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
     <Layout>
      <EmptyState
        heading="Offer modern rewards today"
        action={{
          content: 'Set reward tiers',
          onAction: () => console.log('clicked'),
        }}
        image={img}
      >
        <p>Reward your customers with donation rewards based on their order size.</p>
      </EmptyState>
    </Layout>
   </Page>
);

export default Index;
