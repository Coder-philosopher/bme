"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Research = () => {
  const { data: researchData, isLoading } = useQuery({
    queryKey: ["/api/department-data/research"],
  });

  const research = researchData?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-research-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen " data-testid="page-research">
      {/* Hero Section */}
      <section
        className=" bg-gradient-to-r from-primary-teal to-primary-blue text-white"
        data-testid="section-research-hero"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
            data-testid="heading-research-title"
          >
            Research & Collaboration
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            data-testid="text-research-subtitle"
          >
            Advancing biomedical engineering through innovative research and
            strategic partnerships
          </p>
        </div>
      </section>

      {/* Research Tabs */}
      <section className="py-20" data-testid="section-research-tabs">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs
            defaultValue="publications"
            className="w-full"
            data-testid="tabs-research"
          >
            <TabsList
              className="grid w-full grid-cols-6 mb-8"
              data-testid="tabs-list-research"
            >
              <TabsTrigger value="publications" data-testid="tab-publications">Publications</TabsTrigger>
              <TabsTrigger value="conferences" data-testid="tab-conferences">Conferences</TabsTrigger>
              <TabsTrigger value="chapters" data-testid="tab-chapters">Book Chapters</TabsTrigger>
              <TabsTrigger value="mous" data-testid="tab-mous">MoUs</TabsTrigger>
              <TabsTrigger value="projects" data-testid="tab-projects">Projects</TabsTrigger>
              <TabsTrigger value="talks" data-testid="tab-talks">Invited Talks</TabsTrigger>
            </TabsList>

             <TabsContent value="publications" data-testid="tab-content-publications">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-publications">
                  Journal Publications
                </h2>
                <div className="grid gap-6">
                  {research?.publications?.map((pub, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300"
                      data-testid={`card-publication-${index}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-pub-title-${index}`}>
                            {pub.title}
                          </h3>
                          <p className="text-gray-600 mb-2" data-testid={`text-pub-authors-${index}`}>
                            <strong>Authors:</strong> {pub.authors}
                          </p>
                          <p className="text-gray-600 mb-2" data-testid={`text-pub-journal-${index}`}>
                            <strong>Journal:</strong> {pub.journal}
                          </p>
                        </div>
                        <Badge variant="secondary" data-testid={`badge-pub-year-${index}`}>
                          {pub.year}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="conferences" data-testid="tab-content-conferences">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-conferences">
                  Conference Presentations
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {research?.conferences?.map((conf, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300"
                      data-testid={`card-conference-${index}`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-blue p-3 rounded-full mr-4">
                          <i className="fas fa-users text-white text-xl"></i>
                        </div>
                        <Badge variant="secondary" data-testid={`badge-conf-year-${index}`}>
                          {conf.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-conf-title-${index}`}>
                        {conf.title}
                      </h3>
                      <p className="text-gray-600 mb-2" data-testid={`text-conf-location-${index}`}>
                        <strong>Location:</strong> {conf.location}
                      </p>
                      <p className="text-gray-600" data-testid={`text-conf-presenter-${index}`}>
                        <strong>Presenter:</strong> {conf.presenter}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chapters" data-testid="tab-content-chapters">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-chapters">
                  Book Chapters
                </h2>
                <div className="grid gap-6">
                  {research?.bookChapters?.map((chapter, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300"
                      data-testid={`card-chapter-${index}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-chapter-title-${index}`}>
                            {chapter.title}
                          </h3>
                          <p className="text-gray-600 mb-2" data-testid={`text-chapter-authors-${index}`}>
                            <strong>Authors:</strong> {chapter.authors}
                          </p>
                          <p className="text-gray-600 mb-2" data-testid={`text-chapter-book-${index}`}>
                            <strong>Book:</strong> {chapter.book}
                          </p>
                          <p className="text-gray-600" data-testid={`text-chapter-publisher-${index}`}>
                            <strong>Publisher:</strong> {chapter.publisher}
                          </p>
                        </div>
                        <Badge variant="secondary" data-testid={`badge-chapter-year-${index}`}>
                          {chapter.year}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mous" data-testid="tab-content-mous">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-mous">
                  Memorandums of Understanding
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {research?.mous?.map((mou, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300"
                      data-testid={`card-mou-${index}`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-teal p-3 rounded-full mr-4">
                          <i className="fas fa-handshake text-white text-xl"></i>
                        </div>
                        <Badge variant="secondary" data-testid={`badge-mou-year-${index}`}>
                          {mou.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-mou-org-${index}`}>
                        {mou.organization}
                      </h3>
                      <p className="text-gray-600" data-testid={`text-mou-purpose-${index}`}>
                        <strong>Purpose:</strong> {mou.purpose}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" data-testid="tab-content-projects">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-projects">
                  Sponsored Research Projects
                </h2>
                <div className="overflow-x-auto">
                  <Table data-testid="table-projects">
                    <TableHeader>
                      <TableRow>
                        <TableHead data-testid="header-project-title">Project Title</TableHead>
                        <TableHead data-testid="header-project-pi">Principal Investigator</TableHead>
                        <TableHead data-testid="header-project-copis">Co-PIs</TableHead>
                        <TableHead data-testid="header-project-funding">Funding</TableHead>
                        <TableHead data-testid="header-project-agency">Agency</TableHead>
                        <TableHead data-testid="header-project-status">Status</TableHead>
                        <TableHead data-testid="header-project-duration">Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {research?.projects?.map((project, index) => (
                        <TableRow key={index} className="hover:bg-gray-50" data-testid={`row-project-${index}`}>
                          <TableCell className="font-medium" data-testid={`cell-project-title-${index}`}>
                            {project.title}
                          </TableCell>
                          <TableCell data-testid={`cell-project-pi-${index}`}>{project.pi}</TableCell>
                          <TableCell data-testid={`cell-project-copis-${index}`}>
                            {project.copis?.join(", ")}
                          </TableCell>
                          <TableCell data-testid={`cell-project-funding-${index}`}>{project.funding}</TableCell>
                          <TableCell data-testid={`cell-project-agency-${index}`}>{project.agency}</TableCell>
                          <TableCell data-testid={`cell-project-status-${index}`}>
                            <Badge 
                              variant={project.status === "Ongoing" ? "default" : "secondary"}
                            >
                              {project.status}
                            </Badge>
                          </TableCell>
                          <TableCell data-testid={`cell-project-duration-${index}`}>
                            {project.startDate} - {project.endDate}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="talks" data-testid="tab-content-talks">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-talks">
                  Invited Talks
                </h2>
                <div className="grid gap-6">
                  {research?.invitedTalks?.map((talk, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300"
                      data-testid={`card-talk-${index}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-talk-title-${index}`}>
                            {talk.title}
                          </h3>
                          <p className="text-gray-600 mb-2" data-testid={`text-talk-speaker-${index}`}>
                            <strong>Speaker:</strong> {talk.speaker}
                          </p>
                          <p className="text-gray-600 mb-2" data-testid={`text-talk-event-${index}`}>
                            <strong>Event:</strong> {talk.event}
                          </p>
                          <p className="text-gray-600" data-testid={`text-talk-date-${index}`}>
                            <strong>Date:</strong> {new Date(talk.date).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge 
                          variant={talk.status === "upcoming" ? "default" : "secondary"}
                          data-testid={`badge-talk-status-${index}`}
                        >
                          {talk.status}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            {/* ... */}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Research;
