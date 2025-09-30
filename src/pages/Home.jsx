import React from 'react';
import Hero from '../components/Hero';
import PopularCourses from '../components/PopularCourses';
import FeaturedArticles from '../components/FeaturedArticles';
import PracticeSection from '../components/PracticeSection';
import TrendingTopics from '../components/TrendingTopics';
import TestimonialSection from '../components/TestimonialSection';
import StatsSection from '../components/StatsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <StatsSection />
      <PopularCourses />
      <PracticeSection />
      <FeaturedArticles />
      <TrendingTopics />
      <TestimonialSection />
    </div>
  );
};

export default Home;