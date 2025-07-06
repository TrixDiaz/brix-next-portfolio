import { Button } from "@/components/ui/button";

interface ProjectProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

export const ProjectSection = ({
  heading = "Projects",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  buttons = {
    primary: {
      text: "Coming Soon",
      url: "#",
    },
  },
}: ProjectProps) => {
  return (
    <section id="project" className="py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild variant="default" size="lg">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

