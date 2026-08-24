import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Crumb { name: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500 mb-8 flex-wrap">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-amber-700 transition-colors">
              {crumb.name}
            </Link>
          ) : (
            <span className="text-amber-700 font-medium">{crumb.name}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
