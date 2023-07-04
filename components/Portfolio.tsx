import Button from "./Button";
import Badge from "./Badge";
import Link from "next/link";
import Image from "next/image";
import PROJECTS_LIST from "../lib/projects"

// Thanks to ibelick for this code! https://github.com/ibelick/hello/blob/main/pages/projects.tsx

function Portfolio() {
  return (
    <>
      <div className="prose dark:prose-dark">
        <h2 className="mt-12 text-base font-medium">Selected projects</h2>
        <p>
          Below are some of the best (at least I think so) projects I've worked on. The current list is a placeholder from the repo I forked this from. I'll be updating it soon with my own projects.
        </p>
        <p>
          If you want to see what I'm currently working on, check out my{" "}
          <Link href="/">current projects</Link>
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-12 pr-4 md:pr-16">
        {PROJECTS_LIST.map((project) => {
          return (
            <div className="relative rounded-3xl bg-neutral-50 dark:bg-neutral-950">
              <div className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center">
                <div className="flex flex-col">
                  <h3 className="mb-1">{project.title}</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project?.tags?.map((tag) => {
                      return <Badge key={tag}>{tag}</Badge>;
                    })}
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    onClick={() => window.open(project.links.link, "_blank")}
                  >
                    {project.links.text}
                  </Button>
                </div>
              </div>
              {Boolean(project.video || project.image) ? (
                <>
                  <hr className="mx-auto h-[1px] w-[60%] border-none bg-neutral-200 dark:bg-neutral-900" />
                  <div className="mx-auto flex items-center px-14 py-8">
                    {project.video ? (
                      <video
                        src={project.video.link}
                        autoPlay
                        loop
                        muted
                        className={`mx-auto rounded-3xl object-contain ${project.video.width} ${project.video.height}`}
                      />
                    ) : (
                      <Image
                        src={project.image!.src!}
                        alt={project.title}
                        width={949}
                        height={900}
                        className="h-80 w-full rounded-3xl object-contain"
                      />
                    )}
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;