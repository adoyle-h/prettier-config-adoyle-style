# @adoyle.me/prettier-config

A prettier config for ADoyle's projects.

## Usage

1. `npm i -D @adoyle.me/prettier-config prettier`
2. Add `"prettier": "@adoyle.me/prettier-config"` to package.json.
3. Add .editorconfig file on project root. For example,

      ```
      root = true

      [*]
      indent_style = space
      indent_size = 2
      charset = utf-8
      end_of_line = lf
      trim_trailing_whitespace = true
      insert_final_newline = true

      [*.{js,jsx,ts}]
      indent_size = 4
      indent_style = tab

      [*.{diff,md}]
      trim_trailing_whitespace = false

      [Makefile]
      indent_style = tab
      ```

4. Follow https://prettier.io/docs/en/install.html


## Copyright and License

Copyright 2022 ADoyle (adoyle.h@gmail.com) Some Rights Reserved.
The project is licensed under the **Apache License Version 2.0**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

See the [NOTICE][] file distributed with this work for additional information regarding copyright ownership.

<!-- links -->

[LICENSE]: ./LICENSE
[NOTICE]: ./NOTICE
