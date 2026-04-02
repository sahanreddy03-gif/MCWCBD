import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Stores from "@/pages/Stores";
import Brands from "@/pages/Brands";
import About from "@/pages/About";
import Trust from "@/pages/Trust";
import StoreLocator from "@/pages/StoreLocator";
import Contact from "@/pages/Contact";

// Fallback 404
function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bebas text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bebas tracking-wide mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">The stash you are looking for doesn't exist.</p>
      <a href="/" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors">
        Return Home
      </a>
    </div>
  );
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/stores" component={Stores} />
        <Route path="/brands" component={Brands} />
        <Route path="/about" component={About} />
        <Route path="/trust" component={Trust} />
        <Route path="/store-locator" component={StoreLocator} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
