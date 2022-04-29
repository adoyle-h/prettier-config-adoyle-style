# @adoyle.me/prettier-config

A prettier config for ADoyle's projects.

## Usage

1. `npm i -D @adoyle.me/prettier-config prettier`
2. Add `{"prettier": "@adoyle.me/prettier-config"}` to package.json, or `"@adoyle.me/prettier-config"` to .prettierrc file.
3. Add .editorconfig file on project root. See [.editorconfig](./.editorconfig) for example.
4. Create .prettierignore file. Disable modify markdown and html files. See [.prettierignore](./.prettierignore) for example.
5. If you use eslint, edit .eslintrc file, add `prettier` at the last of `extends`. See [.eslintrc.yaml](./.eslintrc.yaml) for example.
6. Follow https://prettier.io/docs/en/install.html


## Copyright and License

Copyright 2022 ADoyle (adoyle.h@gmail.com) All Rights Reserved.
The project is licensed under the **Apache License Version 2.0**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

See the [NOTICE][] file distributed with this work for additional information regarding copyright ownership.

<!-- links -->

[LICENSE]: ./LICENSE
[NOTICE]: ./NOTICE
