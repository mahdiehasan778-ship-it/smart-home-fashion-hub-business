// src/components/MainContent.jsx
import DealOfTheDay from "./DealOfTheDay";
import TopPicks from "./TopPicks";
import TrendingNow from "./sidebar/TrendingNow";
import NewsletterSignup from "./sidebar/NewsletterSignup";
import LatestBlog from "./sidebar/LatestBlog";
import { dealOfTheDay, topPicks, trendingNow, latestBlogPosts } from "../data/homeSectionData";

export default function MainContent() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Column 1 — Deal of the Day */}
        <div className="lg:col-span-3">
          <DealOfTheDay deal={dealOfTheDay} />
        </div>

        {/* Column 2 — Top Picks For You */}
        <div className="lg:col-span-6">
          <TopPicks products={topPicks} />
        </div>

        {/* Column 3 — Right Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <TrendingNow items={trendingNow} />
          <NewsletterSignup />
          <LatestBlog posts={latestBlogPosts} />
        </div>
      </div>
    </section>
  );
}