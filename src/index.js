import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Navigate, Routes, Outlet } from "react-router-dom";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";
import MoviesContextProvider from "./contexts/moviesContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const TvShowDetailPage = lazy(() => import("./pages/tvShowDetailPage"));
const TvShowsPage = lazy(() => import("./pages/tvShowPage"));
const ActorsDetailPage = lazy(() => import("./pages/actorsDetailPage"));
const ActorsPage = lazy(() => import("./pages/actorsPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const UpComingMoviePage = lazy(() => import("./pages/upComingMoviePage"));
const SearchPage = lazy(() => import("./pages/searchPage"));
const HomePage = lazy(()=> import("./pages/homePage"))

function PrivateOutlet() {
  const {currentUser} = useAuth()
  return currentUser ? <Outlet /> : <Navigate to="/landing" />;
}


const App = () => {

  const [showNav, setShowNav] = useState(true);
  


  return (
    <QueryClientProvider client={queryClient}>
          <BrowserRouter>
          <AuthProvider>
          {   showNav &&
            <SiteHeader />} 
      <MoviesContextProvider>
      <Suspense fallback={<h1>Loading Page</h1>}>
      <Routes>
        <Route path="/" element={<PrivateOutlet/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/upcomingmovies" element={<UpComingMoviePage />} />
        <Route path="/movies/actors" element={<ActorsPage />} />
        <Route path="/movies/tvshows" element={<TvShowsPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/actors/:id" element={<ActorsDetailPage />} />
        <Route path="/tvshows/:id" element={<TvShowDetailPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        </Route>

        <Route path="/landing" element={<LoginPage funcNav={setShowNav}/>}  />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </Suspense>
      </MoviesContextProvider>
      </AuthProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);