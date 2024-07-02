import type { Recommendation } from '@/types/recommendation';

interface Props {
  recommendation: Recommendation
}

export const RecommendationCard = ({ recommendation }: Props) => {
  const { company, date, description, image, name, role } = recommendation

  return (
    <div
      className="p-8  rounded-xl bg-secondary/5 shadow-sm h-[350px]">
      <div className="flex gap-4">
        <img className="w-12 h-12 rounded-full" src={image} alt={`Profile image of ${name}`} width="200" height="200" loading="lazy" />

        <div>
          <h6 className="text-lg font-medium">{name}</h6>
          <p className="text-sm font-medium text-tertiary">{role}</p>
        </div>

      </div>

      <p className="mt-8 line-clamp-6">{description}</p>
    </div>
  )
}
