type ThemeToogleProps = {
    /**
   * Etiqueta visible en el botón: "DARK" o "LIGHT"
   */
  label: string;
  
  /**
   * Callback para alternar el tema
   */
  onClick: () => void;

}
  /**
 * ThemeToggle:
 * Botón encapsulado para alternar entre DARK/LIGHT.
 * - Mantiene el JSX del botón aislado
 * - Permite reutilización en otras secciones
 */

  export default function ThemeToggle({ label, onClick }: ThemeToogleProps) {
    return(
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={onClick}
        className={label === 'DARK' ? 'nes-btn is-primary' : 'nes-btn is-success'}
      >
        {label}
      </button>
    )

  }
