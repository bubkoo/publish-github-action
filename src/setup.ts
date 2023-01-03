import * as core from '@actions/core'
import { exec } from '@actions/exec'
import path from 'path'

export async function setup() {
  core.setOutput('new_release_published', 'false')
  const plugins = [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    '@semantic-release/git',
  ]
  await exec(`npm install ${plugins.join(' ')} --silent`)
  core.debug(`action.cwd: ${path.resolve(__dirname, '..')}`)
  core.debug(`process.cwd: ${process.cwd()}`)
}