import { Outlet, Route, Routes } from "react-router-dom";

import ResumePage from "../pages/resumePage";

export default function Router(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<Outlet />} >
        <Route path="/" element={<ResumePage />} />
      </Route>
    </Routes>
  )
}