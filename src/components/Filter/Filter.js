import Icon from 'components/Icon'
import s from './Filter.module.scss'

export default function Filter({ search, onChange }) {
  return (
    <div className={s.filterWrap}>
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Enter Student Name, Parent or ID here"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={search}
        onChange={e => {
          onChange(e.target.value)
        }}
      />
      <Icon
        className={s.icon}
        width="16px"
        height="16px"
        fill="#C0C0C0"
        iconName="icon-search"
      />
    </div>
  )
}
