import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "@/pages/Home";

const Shop = lazy(() => import("@/pages/Shop"));
const Stores = lazy(() => import("@/pages/Stores"));
const Brands = lazy(() => import("@/pages/Brands"));
const About = lazy(() => import("@/pages/About"));
const Trust = lazy(() => import("@/pages/Trust"));
const StoreLocator = lazy(() => import("@/pages/StoreLocator"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Guides = lazy(() => import("@/pages/Guides"));
const ProgrammaticPage = lazy(() => import("@/pages/ProgrammaticPage"));
const B2B = lazy(() => import("@/pages/B2B"));
const Terms = lazy(() => import("@/pages/Terms"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Compliance = lazy(() => import("@/pages/Compliance"));

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
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/stores" component={Stores} />
          <Route path="/brands" component={Brands} />
          <Route path="/about" component={About} />
          <Route path="/trust" component={Trust} />
          <Route path="/store-locator" component={StoreLocator} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/guides" component={Guides} />
          <Route path="/guides/:slug" component={ProgrammaticPage} />
          <Route path="/b2b" component={B2B} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/compliance" component={Compliance} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
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
