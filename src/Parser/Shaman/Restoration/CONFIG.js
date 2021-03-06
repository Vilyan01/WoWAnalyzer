import React from 'react';
import { Hartra344, Versaya } from 'MAINTAINERS';
import SPECS from 'common/SPECS';
import SPEC_ANALYSIS_COMPLETENESS from 'common/SPEC_ANALYSIS_COMPLETENESS';
import CombatLogParser from './CombatLogParser';
import CHANGELOG from './CHANGELOG';

export default {
  spec: SPECS.RESTORATION_SHAMAN,
  maintainers: [Hartra344, Versaya],
  completeness: SPEC_ANALYSIS_COMPLETENESS.NEEDS_MORE_WORK,
  description: (
    <div>
      Welcome to the Resto Shaman analyzer! We hope you find these suggestions and statistics useful.
      <br /><br />

      If you want to learn more about Resto Shaman, join the Resto Shaman community at the <a href="https://discord.gg/AcTek6e" target="_blank" rel="noopener noreferrer">Ancestral Guidance channel</a>.
    </div>
  ),
  specDiscussionUrl: 'https://github.com/WoWAnalyzer/WoWAnalyzer/issues/56',
  // Shouldn't have to change these:
  changelog: CHANGELOG,
  parser: CombatLogParser,
  // used for generating a GitHub link directly to your spec
  path: __dirname,
};
