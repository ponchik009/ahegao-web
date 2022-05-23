import React from "react";
import { Route, Routes } from "react-router-dom";
import AuditoriesPage from "../../pages/Auditories/AuditoriesPage";
import GroupPage from "../../pages/Group/GroupPage";
import GroupsPage from "../../pages/Groups/GroupsPage";
import HomePage from "../../pages/Home/HomePage";
import TeachersPage from "../../pages/Teachers/TeachersPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Главная страница: 3 кнопки - группы, преподаватели, аудитории*/}
      <Route path="/" element={<HomePage />} />
      {/* Страница групп: список групп */}
      <Route path="/groups" element={<GroupsPage />} />
      {/* Страница преподавателей: список преподавателей */}
      <Route path="/teachers" element={<TeachersPage />} />
      {/* Страница аудиторий: список аудиторий */}
      <Route path="/auditories" element={<AuditoriesPage />} />
      {/* Страница группы: расписание группы */}
      <Route path="/groups/:groupName" element={<GroupPage />} />
      {/* Страница преподавателя: расписание преподавателя */}
      <Route path="/teachers/:teacherName" />
      {/* Страница аудитории: расписание аудитории */}
      <Route path="/auditories/:auditoryName" />
    </Routes>
  );
};

export default AppRouter;
