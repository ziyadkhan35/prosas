import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useTransition } from 'react'

const ChangeLang = () => {

  // Internationalization settings
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    }) 
  }

  return (
    <select
     onChange={onSelectChange}
     disabled={isPending} 
     defaultValue={localActive}
     className="text-cloud-1 bg-primary text-shadow-sm lg:text-lg p-1 rounded tracking-wide mt-1 capitalize" >
      <option value="az">AZ</option>
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  )
}

export default ChangeLang