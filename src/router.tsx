import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const FavoritePage = lazy(() => import('./views/FavoritePage'));
const IndexPage = lazy(() => import('./views/IndexPage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <Suspense fallback={<div>Cargando...</div>}>
              <IndexPage />
            </Suspense>
          } />
          <Route path="/favorites" element={
            <Suspense fallback={<div>Cargando...</div>}>
              <FavoritePage />
            </Suspense>
          } />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}
