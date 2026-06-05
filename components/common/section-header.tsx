import { Badge } from "@/components/ui";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <Badge className="mb-4">{eyebrow}</Badge>
      <h2 className="text-3xl font-semibold tracking-normal text-foreground md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>
    </div>
  );
}
