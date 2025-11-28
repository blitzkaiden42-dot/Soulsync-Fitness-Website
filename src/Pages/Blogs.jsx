import React from "react";
import "../App.css";
import myImage1 from "../Assets/Blogs1.jpg";
import myImage2 from "../Assets/Blogs2.jpg";
import myImage3 from "../Assets/Blogs3.jpeg";
import myImage4 from "../Assets/Blogs4.jpeg";
import myImage5 from "../Assets/Blogs5.jpeg";
import myImage6 from "../Assets/Blogs6.gif";

const blogs = [
  {
    title: "Transform Your Body at Home — The Complete Fitness Solution",
    link: "https://medium.com/activated-thinker/transform-your-body-at-home-the-complete-fitness-solution-without-gym-hassles-85df44c609b5",
    image: myImage1,
    date: "Nov 15, 2025",
    author: "FitExplore Team",
    description:
      "Learn how to achieve full-body transformation at home with minimal equipment. Step-by-step guidance to stay fit and strong.",
    tags: ["#HomeWorkout", "#Strength", "#FitnessTips"],
  },
  {
    title: "No Time? No Problem — Quick Fitness Hacks for Hectic Schedules",
    link: "https://medium.com/@tdrs/my-no-time-no-problem-quick-fitness-hacks-for-hectic-schedules-001c8332d0e4",
    image: myImage2,
    date: "Nov 10, 2025",
    author: "FitExplore Team",
    description:
      "Discover simple and effective exercises that fit any busy schedule. Stay consistent and make progress even when short on time.",
    tags: ["#QuickWorkout", "#HIIT", "#TimeSaver"],
  },
  {
    title: "The Fitness Rule That Builds Muscle Faster Than Any Workout Plan",
    link: "https://medium.com/vo%E2%82%82-maxed/the-fitness-rule-that-builds-muscle-faster-than-any-workout-plan-db91b705347c",
    image: myImage3,
    date: "Nov 18, 2025",
    author: "FitExplore Team",
    description:
      "Discover simple and effective exercises that fit any busy schedule. Stay consistent and make progress even when short on time.",
    tags: ["#Fitness", "#Health", "#Diet", "#HealthyLifeStyle", "#MuscleBuilding"],
  },
  {
    title: "Fitness App Development Services — Build, Launch & Grow Your Health App",
    link: "https://techemizen.medium.com/fitness-app-development-services-build-launch-grow-your-health-app-c25452d38d9b",
    image: myImage4,
    date: "Nov 7, 2025",
    author: "FitExplore Team",
    description:
      "Discover simple and effective exercises that fit any busy schedule. Stay consistent and make progress even when short on time.",
    tags: ["#Fitness", "#Health", "#Diet", "#HealthyLifeStyle", "#MuscleBuilding"],
  },
  {
    title: "Signs Your Fitness Is Actually Working — 11 Real Results Beyond the Scale",
    link: "https://medium.com/@socialsbyfitwithbravo/signs-your-fitness-is-actually-working-11-real-results-beyond-the-scale-91b0b59f1a9f",
    image: myImage5,
    date: "Nov 3, 2025",
    author: "FitExplore Team",
    description:
      "Discover simple and effective exercises that fit any busy schedule. Stay consistent and make progress even when short on time.",
    tags: ["#FitnessTips", "#WorkoutTips", "#Diet", "#BusyProfessional", "#HomeWorkout"],
  },
  {
    title: "5 Simple Fitness Hacks to Think About Fitness Differently Now",
    link: "https://medium.com/@tdrs/5-simple-fitness-hacks-to-think-about-fitness-differently-now-e8d95cd50b95",
    image: myImage6,
    date: "Nov 05, 2025",
    author: "FitExplore Team",
    description:
      "Explore 5 practical fitness hacks to change your mindset, boost results, and make workouts more efficient.",
    tags: ["#FitnessMindset", "#Tips", "#Wellness"],
  },
];

const Blog = () => {
  return (
    <div className="blog-hero">
      <div className="blog-heading">
        <h1>
          Fitness <span className="highlight">Blogs</span>
        </h1>
        <p>Get inspired, stay motivated, and explore the world of fitness.</p>
      </div>

      <div className="blog-wrapper">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
          >
            <div
              className="blog-card-image"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>

            <div className="blog-card-content">
              <h2>{blog.title}</h2>
              <p className="blog-meta">
                {blog.date} • {blog.author}
              </p>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;