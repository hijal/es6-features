/**
 * Limitation of import and export statements
 */

if (requiredSum) {
  export { sum };
}

function importSum() {
  import { sub } from './calculator';
}

/**
 * @Important to note
 *
 * @An export declaration can only be used at the top level of a module.
 * @An import declaration can only be used at the top level of a module.
 */
