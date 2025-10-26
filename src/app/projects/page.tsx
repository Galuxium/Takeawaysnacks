// components/ProjectListingPage.tsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Project } from '../../types';
import prisma from '../../prisma';

interface ProjectListingPageProps {
  userId: string;
}

const ProjectListingPage: React.FC<ProjectListingPageProps> = ({ userId }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.id === userId) {
        const data = await prisma.project.findMany({
          where: {
            userId,
          },
        });
        setProjects(data);
      }
    };

    fetchData();
  }, [userId, user?.id]);

  return (
    <div>
      <h1>Project Listing Page</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectListingPage;

// types/Project.ts

export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

// utils/prisma.ts

import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();