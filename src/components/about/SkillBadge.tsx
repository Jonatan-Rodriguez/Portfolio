import type { Skill } from '../../data/skills'

export function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = skill.icon

  return (
    <div className="group relative flex flex-col items-center">
      <div className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink dark:bg-paper text-paper dark:text-ink text-xs font-medium px-2.5 py-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
        {skill.name}
      </div>
      <div className="grid place-items-center w-16 h-16 rounded-full border border-ink/10 dark:border-paper/15 bg-paper dark:bg-ink shadow-sm transition-transform duration-200 group-hover:scale-110">
        <Icon size={26} color={skill.color} />
      </div>
    </div>
  )
}