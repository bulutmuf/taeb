import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // Handle Scroll to Top & Page Title
  useEffect(() => {
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
