import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler, useState } from 'react'
import Input from './input'

export type TOnPhoneNumberChangeHandler = (
  phoneNumber: number,
  isValid: boolean,
  event: ChangeEvent<HTMLInputElement>
) => void

type TPhoneNumberProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'onKeyDown'> & {
  countryCode?: number
  onChange?: TOnPhoneNumberChangeHandler
}

const toMaskedString = (value: number | string, countryCode: number) => {
  const digits = typeof value === 'number' ? String(value) : value
  return `+${countryCode} (${digits.slice(0, 3).padEnd(3, '_')}) ${digits.slice(3, 6).padEnd(3, '_')} ${digits.slice(6, 8).padEnd(2, '_')}-${digits.slice(8, 10).padEnd(2, '_')}`
}

const isKeyNumber = (key: string) => !Number.isNaN(parseInt(key))

const isKeyBackspace = (key: string) => key === 'Backspace'

export default function PhoneNumber({ value = '', onChange, countryCode = 7, ...otherProps }: TPhoneNumberProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>(value ? String(value) : '')

  const addDigitToPhoneNumber = (digit: string) => {
    if (phoneNumber.length >= 10) {
      return
    }

    setPhoneNumber(phoneNumber + digit)
  }

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!onChange) {
      return
    }

    onChange(+(countryCode + phoneNumber), phoneNumber.length === 10, e)
  }

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const key = e.key

    if (!isKeyNumber(key) && !isKeyBackspace(key)) {
      return
    }

    if (isKeyBackspace(key)) {
      setPhoneNumber(phoneNumber.slice(1, phoneNumber.length))
    } else {
      addDigitToPhoneNumber(key)
    }

    return true
  }

  return (
    <Input
      type="text"
      value={toMaskedString(phoneNumber, countryCode)}
      onChange={onInputChange}
      onKeyDown={onInputKeyDown}
      {...otherProps}
    />
  )
}
